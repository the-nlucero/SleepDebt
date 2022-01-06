//Function defining return values for Hours Slept Each Day of The Week
const getSleepHours = day => 
{
  switch (day)
  {
    case 'monday':
      return 8;
    break;

    case 'tuesday':
      return 6;
    break;

    case 'wednesday':
      return 7;
    break;

    case 'thursday':
      return 6;
    break;

    case 'friday':
      return 5;
    break;

    case 'saturday':
      return 10;
    break;

    case 'sunday':
      return 8;
    break;
  }
};

//Function designed to add up all the hours for the week
const getActualSleepHours = () =>
{
  const totalHours =
  getSleepHours('monday') + 
  getSleepHours('tuesday') +
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');
  return totalHours;
};

const getIdealSleepHours = () =>
{
const idealHours = 8; //perferred hours a day
return idealHours * 7; // perferred hours a week
};

//Print hours slept for the week and ideal amount of hours for the week
console.log('Your Total Hours of sleep for the week is: ' + getActualSleepHours());
console.log('Your ideal amount of sleep should be: ' + getIdealSleepHours())

//Function to calculate Sleep Debt, Over Sleeping, or Right Amount of Sleep
const calculateSleepDebt = () =>
{
const actualSleepHours = getActualSleepHours(); 
const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours)
{
  console.log (`You have the perfect amount of sleep!`);
}

else if (actualSleepHours > idealSleepHours)
{
  const Overslept = actualSleepHours - idealSleepHours;
  console.log(`\nYou slept more than you needed to by ${Overslept} hour(s)`);
}

else
{
  const Sleepmore = idealSleepHours - actualSleepHours;
  console.log(`\nHelp your ideal sleep count and add ${Sleepmore} hour(s) to your sleep pattern!`);
}
};

//Compiles Sleep Debt function and prints out whether or nor this person has sleep debt
calculateSleepDebt();
