import "./App.css";

function App() {
  const people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];

  const array = [1, 2, 3, 4];

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };

  const courses = ["React", "ReactNative", "NodeJs"];

  const isTeenager = (person) => person.age >= 10 && person.age <= 20;

  const firstTeenager = people.find(isTeenager);
  const allTeenagers = people.filter(isTeenager);
  const everyTeenager = people.every(isTeenager);
  const anyTeenager = people.some(isTeenager);

  const sumArray = array.reduce((total, number) => total + number, 0);
  const productArray = array.reduce((total, number) => total * number, 1);

  const companyNames = [];
  companies.forEach((company) => companyNames.push(company.name));

  const companiesAfter1987 = companies.filter((company) => company.start > 1987);

  const retailCompanies = companies
    .filter((company) => company.category === "Retail")
    .map((company) => ({
      ...company,
      start: company.start + 1,
    }));

  const companiesSortedByEnd = [...companies].sort((a, b) => a.end - b.end);

  const agesDescending = [...ages].sort((a, b) => b - a);

  const sumAges = ages.reduce((total, age) => total + age, 0);

  const { name, category } = companies[0];

  const newCompany = {
    name,
    category,
    print() {
      return `Company name: ${this.name}`;
    },
  };

  const sumNumbers = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
  };

  const addToArray = (...items) => {
    const result = [];

    items.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(item);
      }
    });

    return result;
  };

  const {
    address: { street },
  } = person;

  const createCounter = () => {
    let number = 0;

    return () => {
      return number++;
    };
  };

  const counter = createCounter();
  const counterValues = [counter(), counter(), counter(), counter()];

  const getQueryParams = (url) => {
    const queryString = url.split("?")[1];

    if (!queryString) return {};

    return queryString.split("&").reduce((params, item) => {
      const [key, value] = item.split("=");
      params[key] = value;
      return params;
    }, {});
  };

  const queryParams = getQueryParams(
    "https://fpt.edu.vn/event?name=ReactWorkshop&type=Online&slot=100"
  );

  class Shape {
    constructor(color) {
      this.color = color;
    }

    getArea() {
      return 0;
    }

    toString() {
      return `Color: ${this.color}`;
    }
  }

  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }

    getArea() {
      return this.length * this.width;
    }

    toString() {
      return `Rectangle | ${super.toString()} | Length: ${
        this.length
      } | Width: ${this.width} | Area: ${this.getArea()}`;
    }
  }

  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }

    getArea() {
      return (this.base * this.height) / 2;
    }

    toString() {
      return `Triangle | ${super.toString()} | Base: ${this.base} | Height: ${
        this.height
      } | Area: ${this.getArea()}`;
    }
  }

  const rectangle = new Rectangle("Orange", 10, 5);
  const triangle = new Triangle("Blue", 8, 6);

  const promiseExample = () => {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;

      if (randomNumber > 5) {
        resolve(`Success: random number is ${randomNumber}`);
      } else {
        reject(`Error: random number is ${randomNumber}`);
      }
    });
  };

  promiseExample()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  return (
    <div className="page">
      

      <main>
        <section className="card">
          <h2>1. Design: Hello React</h2>
          <div className="hello-react">
            Hello <span>React</span>
          </div>
        </section>

        <section className="card">
          <h2>2. Design: React Logo</h2>
          <div className="react-logo-card">
            <div className="react-symbol">⚛</div>
            <h3>This is the React logo!</h3>
            <p>The library for web and native user interfaces</p>
          </div>
        </section>

        <section className="card">
          <h2>3. Navbar with JSX</h2>
          <nav className="navbar">
            <a className="active" href="#home">
              Home
            </a>
            <a href="#search">Search</a>
            <a href="#contact">Contact</a>
            <a className="login" href="#login">
              Login
            </a>
          </nav>
        </section>

        <section className="card">
          <h2>4. Display Text</h2>
          <h1 className="jsx-title">This is JSX</h1>
        </section>

        <section className="card">
          <h2>5. Display List of Courses</h2>
          <div className="course-box">
            <h1>Course names</h1>
            <ul>
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card">
          <h2>Using ES6 and JSX</h2>

          <div className="grid">
            <div className="result-box">
              <h3>People Array</h3>
              <p>
                <strong>First teenager:</strong> {firstTeenager.name},{" "}
                {firstTeenager.age}
              </p>
              <p>
                <strong>All teenagers:</strong>{" "}
                {allTeenagers.map((p) => `${p.name} (${p.age})`).join(", ")}
              </p>
              <p>
                <strong>Every person is teenager:</strong>{" "}
                {everyTeenager.toString()}
              </p>
              <p>
                <strong>Any person is teenager:</strong>{" "}
                {anyTeenager.toString()}
              </p>
            </div>

            <div className="result-box">
              <h3>Reduce and Arrow Function</h3>
              <p>
                <strong>Array:</strong> {array.join(", ")}
              </p>
              <p>
                <strong>Sum:</strong> {sumArray}
              </p>
              <p>
                <strong>Product:</strong> {productArray}
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Company Exercises</h2>

          <h3>Print company names using forEach</h3>
          <div className="tag-list">
            {companyNames.map((name, index) => (
              <span key={index}>{name}</span>
            ))}
          </div>

          <h3>Companies started after 1987</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              {companiesAfter1987.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.category}</td>
                  <td>{company.start}</td>
                  <td>{company.end}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Retail companies after increasing start by 1</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Start + 1</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              {retailCompanies.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.category}</td>
                  <td>{company.start}</td>
                  <td>{company.end}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Companies sorted by end date ascending</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              {companiesSortedByEnd.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.end}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Ages sorted descending</h3>
          <p className="highlight">{agesDescending.join(", ")}</p>

          <h3>Sum of all ages using reduce</h3>
          <p className="highlight">{sumAges}</p>
        </section>

        <section className="card">
          <h2>Advanced ES6 Requirements</h2>

          <div className="grid">
            <div className="result-box">
              <h3>Object Restructuring</h3>
              <p>{newCompany.print()}</p>
              <p>Category: {newCompany.category}</p>
            </div>

            <div className="result-box">
              <h3>Rest Parameters</h3>
              <p>sumNumbers(10, 20, 30, 40) = {sumNumbers(10, 20, 30, 40)}</p>
            </div>

            <div className="result-box">
              <h3>Unknown Arguments to Array</h3>
              <p>{JSON.stringify(addToArray(1, "React", [2, 3], true))}</p>
            </div>

            <div className="result-box">
              <h3>Nested Destructuring</h3>
              <p>Street: {street}</p>
            </div>

            <div className="result-box">
              <h3>Increment Function</h3>
              <p>{counterValues.join(", ")}</p>
            </div>

            <div className="result-box">
              <h3>URL Query Parameters</h3>
              <p>{JSON.stringify(queryParams)}</p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>4. Classes</h2>

          <div className="class-diagram">
            <div className="class-box parent">
              <h3>Shape</h3>
              <p>- color: String</p>
              <p>+ getArea(): double</p>
              <p>+ toString(): String</p>
            </div>

            <div className="children">
              <div className="class-box">
                <h3>Rectangle</h3>
                <p>- length: int</p>
                <p>- width: int</p>
                <p>+ getArea(): double</p>
                <p>+ toString(): String</p>
              </div>

              <div className="class-box">
                <h3>Triangle</h3>
                <p>- base: int</p>
                <p>- height: int</p>
                <p>+ getArea(): double</p>
                <p>+ toString(): String</p>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="result-box">
              <h3>Rectangle Result</h3>
              <p>{rectangle.toString()}</p>
            </div>

            <div className="result-box">
              <h3>Triangle Result</h3>
              <p>{triangle.toString()}</p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>5. Promise</h2>
          <p>
            A Promise function creates a random number. If the number is larger
            than 5, it returns success. If the number is less than or equal to 5,
            it returns Error.
          </p>
          <p className="notice">
            Open Console with F12 to see the Promise result.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;