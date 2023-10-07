// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import classes from './style.module.css';
import { MantineProvider } from '@mantine/core';
import { Flex,Text,TextInput,Button,Title,Checkbox} from '@mantine/core';
import { useSetState } from '@mantine/hooks';

export default function App() {
  const options2 = ["Monthly","One Time"];
  const [selectedOption2, setSelectedOption2] = useSetState(Array(options2.length).fill(1));
const handleOptionClick2 = (index) => {
    setSelectedOption2(Array(options2.length).fill(0));
    const updatedOptions2 = [selectedOption2];
    updatedOptions2[index] = 1;
    setSelectedOption2(updatedOptions2);
  };
  const options = ["$10", "$20", "$30", "$40", "other"];
const [selectedOption, setSelectedOption] = useSetState(Array(options.length).fill(0));
const handleOptionClick = (index) => {
    setSelectedOption(Array(options.length).fill(0));
    const updatedOptions = [selectedOption];
    updatedOptions[index] = 1;
    setSelectedOption(updatedOptions);
  };
  
  return <MantineProvider>{
    <>
    <Flex className={classes.main}>
      <Flex className={classes.app}>
      <Flex className={classes.section}>
        <Text className={classes.heading}>
          Help us do more
        </Text>
        <Text className={classes.para}>
          We'll get right to the point: we're asking you to support us. We're a nonprofit that relies on support from people like you. If everyone reading this gives $10 monthly, we can thrive for years.
        </Text>
      </Flex>
      <Flex className={classes.section}>
        <Text className={classes.text}>Select gift frequency</Text>
        <Flex className={classes.select}>
       {options2.map((Option, index) => (
                <Button key={index}
                  className={`${
                    selectedOption2[index]==1 ? classes.selectopta : classes.selectopt
                  }`}
                onClick={() => handleOptionClick2(index)}
                >
              {Option}
              </Button>
              ))}
</Flex>
        <Text className={classes.text}>Select amount (in US dollar)</Text>
        <Flex className={classes.buttons}>
          {options.map((Option, index) => (
                <Button key={index}
                  className={`${
                    selectedOption[index]==1 ? classes.active : classes.button
                  }`}
                onClick={() => handleOptionClick(index)}
                >
              {Option}
              </Button>
              ))}
        </Flex>
        <Flex gap={21}>
          <Checkbox className={classes.checkbox}/>
          <Text className={classes.text2}>Yes, Ill generously add $0.75 each month to cover the transaction fees.</Text>
        </Flex>
        <Text className={classes.text}>Name</Text>
        <TextInput className={classes.input}/>
        <Text c="#708AFF" className={classes.text2}>Click here to give in honor of other person</Text>
        <Button className={classes.submit}>Donate Now</Button>
      </Flex>
    </Flex> 
    </Flex>
    </>}
    </MantineProvider>;
}