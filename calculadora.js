const soma = () => {
    console.log(parseInt(args[0]) + parseInt(args[1]));
};

const args = process.argv.slice(2);

soma();