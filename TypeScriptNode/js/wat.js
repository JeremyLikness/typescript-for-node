setTimeout(() => {

    var fnList = [
        '[]+1',
        '[]-1',
        '{}+{}',
        '{}-{}',
        '[]+[]',
        '[]-[]',
        '[]+{}',
        '[]-{}',
        '1 * "foo"',
        '1 + "foo"',
        'typeof {}',
        'typeof null === typeof {}',
        'typeof undefined',
        '1 + 1 === 1 + 1',
        '{} + [] === {} + []',
        'Array(5).join("Cool")',
        'Array(5).join("Cool"+1)',
        '`BA${Array(2).join("Cool"-1)}A`',
        '+!+[] + !+[]+!+[]'
    ],
        idx = 0,
        btn = document.getElementById('wat-button'),
        text = document.getElementById('wat-text'),
        result = document.getElementById('wat-result');

    text.innerText = fnList[idx];

    btn.addEventListener("click", () => {
        result.innerText = `${fnList[idx]} = ${eval(fnList[idx])}`;
        idx++;
        if (idx === fnList.length) {
            btn.setAttribute('disabled', 'disabled');
        }
        else {
            text.innerText = fnList[idx];
        }
    });

}, 0);