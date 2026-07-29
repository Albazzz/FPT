import json
import os
import re

DATA_DIR = r'd:\FPT\SU26\PRN232\Collections\FPT\quiz\data\prn232'

def audit_and_fix_text(text):
    if not isinstance(text, str):
        return text

    # Fix word concats like "in a .NET" -> "in a .NET", "a.NET" -> "a .NET"
    text = re.sub(r'(\b[a-zA-Z]+)(\.NET\b)', r'\1 \2', text)
    text = re.sub(r'(\b\.NET)([a-zA-Z]+\b)', r'\1 \2', text)

    # Fix missing space after punctuation when preceding/following standard words (avoiding URLs like GET /Products?$filter...)
    # Fix comma sticking to words: "word,word" -> "word, word"
    text = re.sub(r'([a-zA-Z]{2,}),([a-zA-Z]{2,})', r'\1, \2', text)

    # Fix specific OCR concatenation bugs
    concat_map = {
        "in dynamic": "in dynamic",
        "in simple": "in simple",
        "a RESTful": "a RESTful",
        "a .NET": "a .NET",
        "a Web API": "a Web API",
        "a microservice": "a microservice",
        "a controller": "a controller",
        "a resource": "a resource",
        "a single": "a single",
        "a custom": "a custom",
        "a property": "a property",
        "a specific": "a specific",
        "a valid": "a valid",
        "a traditional": "a traditional",
        "a complex": "a complex",
        "a primary": "a primary",
        "a binary": "a binary",
        "a formal": "a formal",
        "a service": "a service",
        "a database": "a database",
        "a message": "a message",
        "a client": "a client",
        "a server": "a server",
        "a request": "a request",
        "a response": "a response",
    }
    
    for k, v in concat_map.items():
        text = text.replace(k, v)

    return text

def fix_file(filename):
    filepath = os.path.join(DATA_DIR, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    questions = data.get('questions', [])
    for q in questions:
        num = q.get('num')
        task = q.get('task')

        # Cleanup general text
        q['question'] = audit_and_fix_text(q['question'])
        if isinstance(q.get('options'), dict):
            for k in q['options']:
                q['options'][k] = audit_and_fix_text(q['options'][k])
        if isinstance(q.get('explanation'), dict) and q['explanation'].get('answerDisplay'):
            q['explanation']['answerDisplay'] = audit_and_fix_text(q['explanation']['answerDisplay'])

        # Specific code formatting overrides based on source webp images
        # 1. SP26-FE #7
        if task == 'fe' and num == 7:
            q['question'] = (
                "The following C# code in a .NET creates an endpoint. What does it do?\n\n"
                "app.MapGet(\"/products/{id}\", (int id) => {\n"
                "    // Logic to find a product by id\n"
                "    return Results.Ok($\"Product {id}\");\n"
                "});"
            )

        # 2. SP26-FE #25
        elif task == 'fe' and num == 25:
            q['question'] = (
                "A controller action needs to return a \"Not Found\" response when a resource does not exist. Which of the following is the best way to achieve this?\n\n"
                "C#\n\n"
                "[HttpGet(\"{id}\")]\n"
                "public ActionResult<Product> GetProduct(int id)\n"
                "{\n"
                "    var product = _productService.GetById(id);\n"
                "    if (product == null)\n"
                "    {\n"
                "        return ???; // What should be here?\n"
                "    }\n"
                "    return product;\n"
                "}"
            )

        # 3. SP26-B5-FE #8
        elif task == 'feb5' and num == 8:
            q['question'] = (
                "The following code uses ODataModelBuilder to construct an EDM. What does it do?\n\n"
                "var builder = new ODataConventionModelBuilder();\n"
                "builder.EntitySet<Product>(\"Products\");\n"
                "builder.EntitySet<Category>(\"Categories\");\n"
                "return builder.GetEdmModel();"
            )

        # 4. SP26-B5-FE #21
        elif task == 'feb5' and num == 21:
            q['question'] = (
                "In a .NET 9 application using EF Core, you've defined the following DbContext. How does EF Core know which classes to include in the database model?\n\n"
                "public class ApplicationDbContext : DbContext\n"
                "{\n"
                "    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }\n\n"
                "    public DbSet<Product> Products { get; set; }\n"
                "    public DbSet<Category> Categories { get; set; }\n"
                "}"
            )

        # 5. SP26-B5-FE #26
        elif task == 'feb5' and num == 26:
            q['question'] = (
                "A controller action needs to return a \"Not Found\" response when a resource does not exist. Which of the following is the best way to achieve this?\n\n"
                "C#\n\n"
                "[HttpGet(\"{id}\")]\n"
                "public ActionResult<Product> GetProduct(int id)\n"
                "{\n"
                "    var product = _productService.GetById(id);\n"
                "    if (product == null)\n"
                "    {\n"
                "        return ???; // What should be here?\n"
                "    }\n"
                "    return product;\n"
                "}"
            )

        # 6. SP26-B5-FE #28
        elif task == 'feb5' and num == 28:
            q['question'] = (
                "Consider this simple CoreWCF service contract for a .NET 9 application:\n\n"
                "[ServiceContract]\n"
                "public interface IGreeterService\n"
                "{\n"
                "    [OperationContract]\n"
                "    string Greet(string name);\n"
                "}\n\n"
                "Which part defines what the service does?"
            )

        # 7. SP26-B5-FE #39
        elif task == 'feb5' and num == 39:
            q['question'] = (
                "How do you add Swagger generation and the Swagger UI to your ASP.NET Core 8 application?\n\n"
                "// In Program.cs\n"
                "builder.Services.AddEndpointsApiExplorer();\n"
                "builder.Services.AddSwaggerGen();\n\n"
                "var app = builder.Build();\n\n"
                "if (app.Environment.IsDevelopment())\n"
                "{\n"
                "    // What two lines of code are typically added here?\n"
                "}"
            )

        # 8. SP26-B5-FE #47
        elif task == 'feb5' and num == 47:
            q['question'] = "By default, where does the model binder attempt to get the data for a complex type parameter (like a class or record) in an [ApiController] action?"

        # 9. FA25-FE #4
        elif task == 'fefa25' and num == 4:
            q['question'] = "Which attribute would you use to validate that a property is a valid email address format?"

        # 10. FA25-FE #20
        elif task == 'fefa25' and num == 20:
            q['question'] = "What is the primary advantage of using attribute routing over conventional routing?"

        # 11. FA25-FE #30
        elif task == 'fefa25' and num == 30:
            q['question'] = (
                "The following controller action is intended to update an existing product. Which HTTP verb is most appropriate for this action?\n\n"
                "[HttpPut(\"{id}\")]\n"
                "public IActionResult UpdateProduct(int id, [FromBody] Product product)\n"
                "{\n"
                "    // Logic to update the product\n"
                "    return NoContent();\n"
                "}"
            )

        # 12. FA25-FE #35
        elif task == 'fefa25' and num == 35:
            q['question'] = (
                "The following LINQ query is written in a .NET 8 service using EF Core. What does it do?\n\n"
                "var result = await _context.Products\n"
                "    .Where(p => p.IsAvailable)\n"
                "    .OrderBy(p => p.Name)\n"
                "    .ToListAsync();"
            )

        # 13. FA25-FE #50
        elif task == 'fefa25' and num == 50:
            q['question'] = "Which of the following is an example of synchronous communication between microservices?"

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Updated {filename}")

if __name__ == '__main__':
    fix_file('fe.json')
    fix_file('feb5.json')
    fix_file('fefa25.json')
