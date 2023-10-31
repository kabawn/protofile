import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
    codes: any[] = [];
    
    @ViewChild('dynamicPart', { static: false }) dynamicPartElem!: ElementRef;

    constructor(private renderer: Renderer2) { }


    ngOnInit() {
        // The set of code snippets
        const snippets = [
            'def hello():\n  print("Python")',
            'console.log("JavaScript");',
            'public static void Main()\n{\n  Console.WriteLine("C#");\n}',
            '#include <iostream>\n\nint main() {\n  std::cout << "C++";\n}',
            'echo "PHP";',
            'SELECT * FROM users;\n-- SQL',
            'print("Hello, Swift!")\n// Swift',
            'System.out.println("Java");',
            'BEGIN\n  DBMS_OUTPUT.PUT_LINE(\'Oracle PL/SQL\');\nEND;',
            'func main() {\n  fmt.Println("Go")\n}\n// Go',
            'class HelloWorld {\n  func printHello() {\n    println("Kotlin")\n  }\n}',
            'puts "Ruby"'
        ];

        

        for (let snippet of snippets) {
            for (let i = 0; i < 3; i++) {
                this.codes.push({
                    text: snippet,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`
                });
            }
        }
    }

    ngAfterViewInit() {
        this.typewriterEffect();
    }

    typewriterEffect() {
        const dynamicParts = ['Front-end', 'Back-end', 'Full Stack'];
        let index = 0;
        let isDeleting = false;
        let currentString = '';

        const updateTyping = () => {
            if (isDeleting) {
                currentString = currentString.slice(0, -1);
            } else {
                currentString += dynamicParts[index][currentString.length];
            }

            // Set the text and class using Renderer2
            this.renderer.setProperty(this.dynamicPartElem.nativeElement, 'innerText', currentString);
            this.renderer.addClass(this.dynamicPartElem.nativeElement, 'highlighted-text');

            if (!isDeleting && currentString === dynamicParts[index]) {
                setTimeout(() => { isDeleting = true; updateTyping(); }, 1000);
            } else if (isDeleting && currentString === '') {
                isDeleting = false;
                index = (index + 1) % dynamicParts.length;
                setTimeout(updateTyping, 500);
            } else {
                setTimeout(updateTyping, isDeleting ? 100 : 200);
            }
        };

        updateTyping();
    }
}


    

