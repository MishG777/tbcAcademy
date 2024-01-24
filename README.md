#project Structure
/project-root
│
├──/node_modules
│
├── /src
│ ├── /assets
│ │ └── Images (.jpg .svg ...)
│ │
│ ├── /components
│ │ ├── Header.jsx
│ │ ├── FreqAskedQuestions.jsx
│ │ ├── Partners.jsx
│ │ ├── Slider.jsx
│ │ ├── Footer.jsx
│ │
│ ├── /styles
| | ├── App.module.css
│ │ ├── Header.module.css
│ │ ├── FreqAskedQuestions.module.css
│ │ ├── Partner.module.css
│ │ ├── Slider.module.css
│ │ ├── Footer.module.css
│ │
│ │
│ ├── /utils
│ │ ├── questions.js
│ │
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── /config
│── .gitignore
│── index.html
│── package-lock.json
├── package.json
├── README.md
└── vite.config.js

---

#ტექნოლოგიები

1. JS library - React.js
   იუზერ ინტერფეისების მარტივად და სწრაფად ასაწყობად, სადაც ძირითადი არქიტექტურა კომპონენტებზეა აწყობილი, რეაქტი იყენებს virtual DOM-ს,
   რომელიც ცვლილებების დროს აფდეითდება, შემდგომ კი ეგრეთწოდებული diffing-ის შემდეგ, ეძებს/ანგარიშობს საუკეთესო გზას real DOM-ის განახლებისთვის.

2. styling - CSS modules
   CSS modules - საჭუალებას გვაძლევს რათა იგივე კლასნეიმის სახელები გამოვიყენოთ სხვადასხვა ფაილებში, შესაბამისად სახელების დამთხვევის დროს სადარდებელიც ნაკლებია.
   მაგალითად style.module.css გაფართოებით

3. ..
