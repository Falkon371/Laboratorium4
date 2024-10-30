import { useEffect, useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View, Dimensions } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function App() {

  const [text, setText] = useState('');
  const [isPotrait, setIsPotrait] = useState(true)
  const [memory, setMemory] = useState(0)
  const [isRadian, setIsRadian] = useState(true)
  const [isSecondMode, setSecondMode] = useState(false)

  const handleSecondMode = () => setSecondMode(!isSecondMode)

  const handlePower = () =>{
    try{
      const base = eval(text)
      setText(base + '**');
    }catch{
      setText('Error')
    }
  }

  const exp = () =>{
    const result = Math.exp(eval(text))
    setText(result.toString());
  };

  const tenPowX = () =>{
    const result = Math.pow(10, eval(text))
    setText(result.toString());
  }

  const handleEE = () =>{
    setText(prevVal => prevVal + 'E')
  }

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const silnia = (x) => {
    x = Number(x)
    if(x <= 1){
      return 1
    }else{
      return x * silnia(x-1)
    }
  };

  const handleMemoryClear = () => setMemory(0);

  const handleMemoryAdd = () =>{
    const currentValue = eval(text) || 0;
    setMemory(memory + currentValue) 
  }

  const handleMemorySubtract = () =>{
    const currentValue = eval(text) || 0;
    setMemory(memory - currentValue) 
  }

  const handleMemoryRecall = () => setText(memory.toString())

  const Rand = () =>{
    return Math.random()
  }

  const pier = (x) =>{
    return Math.sqrt(Number(x))
  }

  const pier3 = (x) =>{
    return Math.cbrt(Number(x))
  }

  const ln = (x) =>{
    return Math.log(Number(x)).toFixed(2)
  }

  const ln10 = (x) =>{
    return Math.log10(Number(x)).toFixed(2)
  }

  const handleModeToggle = () => setIsRadian(!isRadian);

  const trigFunc = (func) =>{
    const angle = eval(text)
    const angleInRadians = isRadian ? angle : (angle * Math.PI) / 180;
    let result;

    switch(func){
      case 'sin':
        result = Math.sin(angleInRadians);
        break;
      case 'cos':
        result = Math.cos(angleInRadians);
        break;
      case 'tan':
        result = Math.tan(angleInRadians);
        break;
      case 'sinh':
        result = Math.sinh(angleInRadians);
        break;
      case 'cosh':
        result = Math.cosh(angleInRadians);
        break;
      case 'tanh':
        result = Math.tanh(angleInRadians);
        break;             
      default:
        return;  
    }
    setText(result.toString())
  }

  useEffect(() => {

    const handleOrientationChange = () =>{
      const dim = Dimensions.get('window');
      setIsPotrait(dim.height >= dim.width)
    } 

    const subscription = Dimensions.addEventListener(
      'change', handleOrientationChange );

    return () => subscription?.remove();
  }, []);

  const dodajText = (val) =>{
    setText(prevVal => prevVal + val)
  }

  const clearAll = () =>{
    setText('')
  }
    
  const handlePierw = (t) => {
    try {
      const parts = t.split(/ √ /);
      const n = parseFloat(parts[0])
      const root = parseFloat(parts[1])

      setText(String(Math.pow(n, 1/root).toFixed(2)));
    } catch {
      setText("Error");
    }
  };

  const wynik = (t) => {
    try {
      if (t.includes('√')) {
        handlePierw(t); 
      } else {
        const res = eval(t); 
        setText(res);
      }
    } catch (error) {
      setText('Error');
    }
  }

  const potega2 = (t) =>{
    r = eval(t)
    return setText(Math.pow(r, 2))
  }

  const potega3 = (t) =>{
    r = eval(t)
    return setText(Math.pow(r, 3))
  }

  const inverse = () =>{
    const currentVal = eval(text) || 0;
    if(currentVal !== 0){
      setText((1/currentVal).toString());
    }else{
      setText("Error");
    }
  };

  const toggleZnak = () =>{
    const currVal = eval(text) || 0;
    setText((-currVal).toString());
  }

  return (
    <SafeAreaProvider>

      {isPotrait ? (
           <View style={[styles.container, {padding:dimensions.width < 800}]}>
          
           <View style={styles.textScreen}>
           <Text style={styles.obliczenia}>{text}</Text>
           </View>

           <View style={styles.buttons}>
           <TouchableOpacity onPress={() => clearAll()}>
           <Text style={styles.button}>AC</Text>
           </TouchableOpacity>
           <Text style={styles.buttonWide}></Text>

           <TouchableOpacity onPress={() => dodajText(' / ')}>
           <Text style={styles.operatory}>/</Text>
           </TouchableOpacity>
          
          
           <TouchableOpacity onPress={() => dodajText('7')}>
           <Text style={styles.button}>7</Text>
           </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('8')}>
             <Text style={styles.button}>8</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('9')}>
             <Text style={styles.button}>9</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText(' * ')}>
             <Text style={styles.operatory}>X</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('4')}>
             <Text style={styles.button}>4</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('5')}>
             <Text style={styles.button}>5</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('6')}>
             <Text style={styles.button}>6</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText(' - ')}>
             <Text style={styles.operatory}>-</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('1')}>
             <Text style={styles.button}>1</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('2')}>
             <Text style={styles.button}>2</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('3')}>
             <Text style={styles.button}>3</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText(' + ')}>
             <Text style={styles.operatory}>+</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('0')}>
             <Text style={styles.buttonWide}>0</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => dodajText('.')}>
             <Text style={styles.button}>.</Text>
             </TouchableOpacity>
          
             <TouchableOpacity onPress={() => wynik(text)}>
             <Text style={styles.operatory}>=</Text>
             </TouchableOpacity>
           </View>
          </View>
      ): (
        <View style={[styles.container, {padding:dimensions.width < 800}]}>

        <View style={styles.landTextScreen}>
        <Text style={styles.obliczenia}>{text}</Text>
        </View>

        <View style={styles.buttons}>

        <TouchableOpacity onPress={() => dodajText(' ( ')}>
        <Text style={styles.landOperator}>(</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => dodajText(' ) ')}>
        <Text style={styles.landOperator}>)</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleMemoryClear()}>
        <Text style={styles.landOperator}>mc</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleMemoryAdd()}>
        <Text style={styles.landOperator}>m+</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleMemorySubtract()}>
        <Text style={styles.landOperator}>m-</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleMemoryRecall()}>
        <Text style={styles.landOperator}>mr</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => clearAll()}>
        <Text style={styles.landOperator}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleZnak()}>
        <Text style={styles.landOperator}>±</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dodajText(' % ')}>
        <Text style={styles.landOperator}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dodajText(' / ')}>
        <Text style={styles.landOperatorSmall}>/</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleSecondMode()}>
        <Text style={styles.landOperator}>2nd </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => potega2(text)}>
        <Text style={styles.landOperator}>x2</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => potega3(text)}>
        <Text style={styles.landOperator}>x3</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handlePower()}>
        <Text style={styles.landOperator}>xy</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => exp()}>
        <Text style={styles.landOperator}>ex</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => tenPowX()}>
        <Text style={styles.landOperator}>10x</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => dodajText('7')}>
        <Text style={styles.landButton}>7</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText('8')}>
          <Text style={styles.landButton}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText('9')}>
          <Text style={styles.landButton}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText(' * ')}>
          <Text style={styles.landOperatorSmall}>X</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => inverse()}>
        <Text style={styles.landOperator}>1/x</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setText(pier(text))}>
        <Text style={styles.landOperator}>√</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setText(pier3(text))}>
        <Text style={styles.landOperator}>∛</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => dodajText(' √ ')}>
        <Text style={styles.landOperator}>y√</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setText(ln(text))}>
        <Text style={styles.landOperator}>ln</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setText(ln10(text))}>
        <Text style={styles.landOperator}>log10</Text>
        </TouchableOpacity>


          <TouchableOpacity onPress={() => dodajText('4')}>
          <Text style={styles.landButton}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText('5')}>
          <Text style={styles.landButton}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText('6')}>
          <Text style={styles.landButton}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText(' - ')}>
          <Text style={styles.landOperatorSmall}>-</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => setText(silnia(text))}>
        <Text style={styles.landOperator}>x!</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => trigFunc('sin')}>
        <Text style={styles.landOperator}>sin</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => trigFunc('cos')}>
        <Text style={styles.landOperator}>cos</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => trigFunc('tan')}>
        <Text style={styles.landOperator}>tan</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => dodajText(String((Math.E).toFixed(2)))}>
        <Text style={styles.landOperator}>e</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleEE()}>
        <Text style={styles.landOperator}>EE</Text>
        </TouchableOpacity>



          <TouchableOpacity onPress={() => dodajText('1')}>
          <Text style={styles.landButton}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText('2')}>
          <Text style={styles.landButton}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText('3')}>
          <Text style={styles.landButton}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText(' + ')}>
          <Text style={styles.landOperatorSmall}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleModeToggle}>
        <Text style={styles.landOperator}>Rad</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => trigFunc('sinh')}>
        <Text style={styles.landOperator}>sinh</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => trigFunc('cosh')}>
        <Text style={styles.landOperator}>cosh</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => trigFunc('tanh')}>
        <Text style={styles.landOperator}>tanh</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => dodajText(' 3.14 ')}>
        <Text style={styles.landOperator}>π</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => dodajText(String(Rand().toFixed(2)))}>
        <Text style={styles.landOperator}>Rand</Text>
        </TouchableOpacity>


          <TouchableOpacity onPress={() => dodajText('0')}>
          <Text style={styles.landButtonWide}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dodajText('.')}>
          <Text style={styles.landButton}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => wynik(text)}>
          <Text style={styles.landOperatorSmall}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      )}

    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 5,
    height: 300
  },
  landOperator:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 80,
    height: 60,
    color: 'white',
    fontSize: 25,
    backgroundColor: '#505050'
  },
  landOperatorSmall:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 80,
    height: 60,
    color: 'white',
    fontSize: 25,
    backgroundColor: '#c68308'
  },
  button:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 100,
    height: 90,
    color: 'white',
    fontSize: 30,
    backgroundColor: '#646464'
  },
  landButton:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 80,
    height: 60,
    color: 'white',
    fontSize: 25,
    backgroundColor: '#646464'
  },
  buttonWide:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 200,
    height: 90,
    color: 'white',
    fontSize: 30,
    backgroundColor: '#646464'
  },
  textScreen:{
    backgroundColor: '#323232',
    width: 400,
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  landTextScreen:{
    backgroundColor: '#323232',
    width: 800,
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  landButtonWide:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 160,
    height: 60,
    color: 'white',
    fontSize: 25,
    backgroundColor: '#646464'
  },
  obliczenia:{
    color: 'white',
    fontSize: 60
  },
  operatory:{
    textAlign: 'center', 
    textAlignVertical: 'center',
    width: 100,
    height: 90,
    color: 'white',
    fontSize: 30,
    backgroundColor: '#c68308'
  }
  
});
