var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
    id: 1,
    brand: "Audi",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];

var CarsTable = function (_React$Component) {
    _inherits(CarsTable, _React$Component);

    function CarsTable() {
        _classCallCheck(this, CarsTable);

        return _possibleConstructorReturn(this, (CarsTable.__proto__ || Object.getPrototypeOf(CarsTable)).apply(this, arguments));
    }

    _createClass(CarsTable, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { className: "table__cars" },
                React.createElement(
                    "tbody",
                    null,
                    CARS.map(function (brand) {
                        return React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(
                                "tr",
                                { key: brand.id },
                                React.createElement(
                                    "td",
                                    null,
                                    brand.brand
                                )
                            ),
                            brand.models.map(function (model) {
                                return React.createElement(
                                    React.Fragment,
                                    null,
                                    React.createElement(
                                        "tr",
                                        { key: brand.id + "_" + model.id },
                                        React.createElement(
                                            "td",
                                            null,
                                            model.name
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            model.collection.map(function (inst) {
                                                return React.createElement(
                                                    React.Fragment,
                                                    null,
                                                    React.createElement(
                                                        "tr",
                                                        { key: inst.id },
                                                        React.createElement(
                                                            "td",
                                                            null,
                                                            "Version: ",
                                                            inst.version,
                                                            React.createElement("br", null),
                                                            "Year: ",
                                                            inst.horsepower,
                                                            React.createElement("br", null),
                                                            "Horsepower: ",
                                                            inst.horsepower,
                                                            React.createElement("br", null),
                                                            "Engine: ",
                                                            inst.engine
                                                        )
                                                    )
                                                );
                                            })
                                        )
                                    )
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return CarsTable;
}(React.Component);

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        null,
        "Car Specs"
    ),
    React.createElement(CarsTable, null)
));