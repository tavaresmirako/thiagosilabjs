document.addEventListener('DOMContentLoaded', function Primos() {

    mods = 0;
    primos = "";

    for (n = 1; n < 1000; n++) {

        mods = 1;

        for (z = 1; z < n; z++) {
            mods += n % z === 0 ? 1 : 0;
        }

        if (mods == 2) {
            primos += primos === "" ? n : "\n" + n;
        }

    }

    window.alert("Os numeros são" + primos);

});