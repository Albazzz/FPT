$csharpCode = @"
using System;
using System.Threading.Tasks;
using Windows.Globalization;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

public class WinOcrHelper {
    public static string RecognizeText(string imagePath) {
        return Task.Run(async () => {
            StorageFile file = await StorageFile.GetFileFromPathAsync(imagePath);
            using (var stream = await file.OpenAsync(FileAccessMode.Read)) {
                BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
                SoftwareBitmap softwareBitmap = await decoder.GetSoftwareBitmapAsync();
                OcrEngine engine = OcrEngine.TryCreateFromLanguage(new Language("en-US"));
                OcrResult result = await engine.RecognizeAsync(softwareBitmap);
                return result.Text;
            }
        }).GetAwaiter().GetResult();
    }
}
"@

Add-Type -TypeDefinition $csharpCode -CompilerOptions "/target:library"

$fullPath = (Resolve-Path $args[0]).Path
$text = [WinOcrHelper]::RecognizeText($fullPath)
Write-Host "=== OCR OUTPUT ==="
Write-Host $text
