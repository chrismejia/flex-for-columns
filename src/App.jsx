import "./App.css";
import "./row-and-columns.css";

function App() {
  return (
    <div className="App">
      <h1>Flex Layouts through Rows and Columns</h1>

      <h2>
        Idea: Build layouts using flexbox rows that have 12 (flexspace) columns.
      </h2>

      <ol>
        <li>Create a parent element with a class of "row".</li>
        <li>Create an element column.</li>
        <li>Determine how many columns wide (12 max) that column will be.</li>
        <li>Set that value as that column's flex value.</li>
      </ol>

      <section>
        <div className="code-blocks">
          <div className="code-blocks__single">
            <h3>Container (row)</h3>
            <pre>
              <code>display: flex;</code>
              <code>flex-direction: row;</code>
              <code>border: 2px solid white;</code>
            </pre>
          </div>
          <div className="code-blocks__single">
            <h3>Left Column (child)</h3>
            <pre>
              <code>flex: 1;</code>
              <code>height: 350px;</code>
              <code>background-color: aqua;</code>
            </pre>
          </div>
          <div className="code-blocks__single">
            <h3>Right Column (child)</h3>
            <pre>
              <code>flex: 2;</code>
              <code>height: 350px;</code>
              <code>background-color: goldenrod;</code>
            </pre>
          </div>
        </div>

        <div className="row">
          <div className="column is-3">
            <p>This column takes up ⅓ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
          <div className="column is-1">
            <p>This column takes up ⅔ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
          <div className="column is-3">
            <p>This column takes up ⅓ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
          <div className="column is-1">
            <p>This column takes up ⅔ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
          <div className="column is-3">
            <p>This column takes up ⅓ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
          <div className="column is-1">
            <p>This column takes up ⅔ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="column is-2">
            <p>This column takes up ⅔ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
          <div className="column is-1">
            <p>This column takes up ⅓ of the flex spaces in the row.</p>
            <p>
              Scaled to a 12 column row, this single column would be 4 wide.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>Even Column Layouts</h3>
        <div className="row">
          <div className="column is-6">6</div>
          <div className="column is-6">6</div>
        </div>

        <div className="row">
          <div className="column is-4">4</div>
          <div className="column is-4">4</div>
          <div className="column is-4">4</div>
        </div>

        <div className="row">
          <div className="column is-3">3</div>
          <div className="column is-3">3</div>
          <div className="column is-3">3</div>
          <div className="column is-3">3</div>
        </div>

        <div className="row">
          <div className="column is-2">2</div>
          <div className="column is-2">2</div>
          <div className="column is-2">2</div>
          <div className="column is-2">2</div>
          <div className="column is-2">2</div>
          <div className="column is-2">2</div>
        </div>

        <div className="row">
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <h3>12 Column Layouts</h3>

        <div className="row">
          <div className="column is-12">12</div>
        </div>

        <div className="row">
          <div className="column is-11">11</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-10">10</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-9">9</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-8">8</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-7">7</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-6">6</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-5">5</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-4">4</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-3">3</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-2">2</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>

        <div className="row">
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
          <div className="column is-1">1</div>
        </div>
      </section>
    </div>
  );
}

export default App;
