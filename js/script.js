let Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        }
    },
    componentDidMount: function () {
        console.log('componentDidMount(): Doładowanie danych, uruchomienie skryptów, które wymagają utworzonych obiektów w DOM');
    },
    UNSAFE_componentWillReceiveProps: function (nextProps) {
        console.log('według najnowszej specyfikacji nie powinno się używać tej metody');
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('ShouldComponentUpdate() Pozwala kontrolować kiedy element ma się ponownie renderować');
        return true;
    },
    UNSAFE_componentWillUpdate: function(nextProps, nextState) {
        console.log('według najnowszej specyfikacji nie powinno się używać tej metody');
    },
    componentDidUpdate: function (prevProps, prevState, snapshot) {
        console.log('componentDidUpdate() można wprowadzić zmiany w odpowiedzi na update komponentu');
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount() "posprzątanie" wszystkich elementów, żeby można było spokojnie usunąć element z DOM')
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function () {
        return React.createElement('div', {},
            React.createElement('button', { onClick: this.increment }, 'Increment'),
            React.createElement('button', {onClick: this.decrement}, 'Decrement'),
            React.createElement('span', {}, 'Licznik: ' + this.state.counter)
        );
    }
});

const numbers = [1, 2, 3, 4, 5]
let counters = numbers.map(item => {
    return React.createElement(Counter, {
        key: item,
    });
});
let CounterList = React.createClass({
    render: function () {
        return React.createElement('ul', {}, counters)
    }
})
const element = React.createElement(CounterList);
ReactDOM.render(element, document.getElementById('app'));