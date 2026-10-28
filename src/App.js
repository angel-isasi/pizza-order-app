const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.description),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
            React.createElement("h1", {}, "First Project? I remember 999..."),
            React.createElement(Pizza, { 
                name: "Pepperoni", 
                description: "A classic pizza with pepperoni slices." 
            }),
            React.createElement(Pizza, { 
                name: "Mushroom", 
                description: "A delicious pizza with fresh mushrooms." 
            }),
            React.createElement(Pizza, { 
                name: "Hawaiian", 
                description: "A tropical pizza with ham and pineapple." 
            }),
            React.createElement(Pizza, { 
                name: "Meat Lovers", 
                description: "A hearty pizza with a variety of meats." 
            }),
            React.createElement(Pizza, { 
                name: "Vegetarian", 
                description: "A healthy pizza with a variety of vegetables." 
            }),
        ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

