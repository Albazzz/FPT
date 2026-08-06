param (
    [string]$ImagePath
)

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Globalization.Language, Windows.Globalization, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime]
$null = [Windows.Storage.StorageFile, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime]

function AwaitTask($asyncOp) {
    $asTask = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' }
    $genMethod = $asTask[0].MakeGenericMethod($asyncOp.GetType().GetGenericArguments())
    $task = $genMethod.Invoke($null, @($asyncOp))
    $task.Wait()
    return $task.Result
}

$fullPath = (Resolve-Path $ImagePath).Path
$fileObj = AwaitTask ([Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath))
$stream = AwaitTask ($fileObj.OpenAsync([Windows.Storage.FileAccessMode]::Read))
$decoder = AwaitTask ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream))
$softwareBitmap = AwaitTask ($decoder.GetSoftwareBitmapAsync())

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new('en-US'))
$ocrResult = AwaitTask ($engine.RecognizeAsync($softwareBitmap))

Write-Host "=== OCR RESULT FOR: $fullPath ==="
Write-Host $ocrResult.Text
