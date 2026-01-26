const myFunction = require('./sample-function.js')

test('Testing div -- success', () =>{

    const target = 1;
    const result = myFunction.div(1,1);

    expect(target).toBe(result);
});

test('Testing containNumber 1 -- success', () =>{

    const target = false;
    const result = myFunction.containsNumber("Hello")

    expect(target).toBe(result);
});


test('Testing containNumber 2 -- success', () =>{

    const target = true;
    const result = myFunction.containsNumber("Hello67");

    expect(target).toBe(result);

});

test('Testing containNumber 3 -- success', () =>{

    const target = true;
    const result = myFunction.containsNumber("67");

    expect(target).toBe(result);
});

test('Testing containNumber  4 -- success', () =>{

    const target = false;
    const result = myFunction.containsNumber("");

    expect(target).toBe(result);
});

test('Testing containNumber 5 -- success', () =>{

    const target = false;
    const result = myFunction.containsNumber("     ");

    expect(target).toBe(result);
});

test('Testing containNumber 6 -- success', () =>{

    const target = false;
    const result = myFunction.containsNumber("just words with space     ");

    expect(target).toBe(result);
});

test('Testing containNumber 6 -- success', () =>{

    const target = true;
    const result = myFunction.containsNumber("0");

    expect(target).toBe(result);
});