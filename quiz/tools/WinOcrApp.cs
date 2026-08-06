using System;
using System.IO;
using System.Threading.Tasks;

// We use COM / WinRT via interop or PowerShell / Python / Node
class Program {
    static void Main(string[] args) {
        if (args.Length == 0) {
            Console.WriteLine("Usage: winocr.exe <image_path>");
            return;
        }
        string path = Path.GetFullPath(args[0]);
        Console.WriteLine("Processing: " + path);
    }
}
