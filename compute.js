const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    };
    return sum;
  };
  
  process.on('start', message => {
    console.log("child"+process.pid);
    const result = longComputation();
    process.send(result);
  });


