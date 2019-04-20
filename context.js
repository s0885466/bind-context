/*Без привязки контекста - работать не будет*/

var car = {
    name: 'ford',
    getName: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000)
    }
};


/*Привязка контекста с помощью bind*/

var car = {
    name: 'ford',
    getName: function () {
        setTimeout(function () {
            console.log(this.name);
        }.bind(this), 1000)
    }
};

car.getName();

/*Привязка контекста с помощью bind c выносом ее за объект*/

var car = {
    name: 'ford',
    getName: function () {
        setTimeout(getName.bind(this), 1000)
    }
};

function getName(){
    console.log(this.name);
}

car.getName();

/*Привязка контекста с помощью замыкания*/

var car = {
    name: 'ford',
    getName: function () {
        var that = this;
        setTimeout(function () {
            console.log(that.name);
        }, 1000)
    }
};

car.getName();

/*Привязка контекста с помощью стрелочной функции*/

var car = {
    name: 'ford',
    getName: () => {
        setTimeout(function () {
            console.log(this.name);
        }, 1000)
    }
};

car.getName();

/* Пример использование функций call apply и также bind*/

var car = {
    name: 'ford',
};

function setNewData(year, color){
    this.year = year;
    this.color = color;
    console.log(`В объект ${this.name} внесены изменения`);
    console.log(this);
}

setNewData.call(car, 2010, 'green');
setNewData.apply(car, [2010, 'red']);

var Set2012Blue = setNewData.bind(car);
Set2012Blue(2012, 'blue');