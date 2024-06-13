import { useState } from 'react';
import { AnimatePresence ,motion} from 'framer-motion';
import NewChallenge from './NewChallenge.jsx';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
    <AnimatePresence>
      {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <div style={{
          gap:'5px',
          display:'flex'
        }}>
        <Link to='..'> <motion.button 
        whileHover={{scale:1.1,backgroundColor:'#8b11f0'}}
        transition={{type:'spring',stiffness:500}}
        className="button">
          Go Home
        </motion.button>
        </Link>
        <motion.button 
        whileHover={{scale:1.1,backgroundColor:'#8b11f0'}}
        transition={{type:'spring',stiffness:500}}
        onClick={handleStartAddNewChallenge} className="button">
          Add Challenge
        </motion.button>
        </div>
      </header>
    </>
  );
}
