import { Sidebar } from "./components/Sidebar/Sidebar"
import { TwitterForm } from "./components/TwitterForm/TwitterForm"
import { v4 } from 'uuid'
import { Tweet } from "./components/Tweet/Tweet"
import { generateImages, getRandomImages } from './utils/generateImages'
import { useState, useEffect } from "react"
import { Aside } from "./components/Aside/Aside"

function App() {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets()
    }, 5000)
    return () => clearInterval(interval)

  }, [])

  const addNewRandomTweets = () => {
    const randomTweets = [
      'Um melão sempre é preferível ao melado, como demonstrou Aristóteles em suas escolhas alimentares, enquanto Platão, ao se entregar ao melado, se perdeu em suas ideias.',
      'Como dizia Demócrito e Leucipo, é melhor ter um real na mão do que dois reais no chão, uma lição que Aristóteles enfatizaria ao criticar o comportamento vacilão de quem despreza o que já possui.',
      'Eu avisei: Kant confunde limão com mamão e choca a internet, enquanto Elon Musk lança um foguete que promete revolucionar a exploração espacial. Foi previsto.',
      'Hoje, enquanto distribuo minha receita de cloreto de sódio diretamente com o profissional Jacquin, reflito sobre como Elon Musk poderia revolucionar o transporte dos foguetes com inovação semelhante.',
      'Um menino transforma-se em homem apenas após zerar Dark Souls 1, refletindo a ideia de Aristóteles sobre o desenvolvimento pessoal e a descoberta da realidade, semelhante à alegoria da caverna de Platão.'
    ]
    const randomTweet = randomTweets[Math.floor(Math.random() * randomTweets.length)]

    addNewTweet(randomTweet, Math.random() > 0.6)

  }


  const addNewTweet = (text, withImage = false) => {
    const newTweet = {
      id: v4(),
      name: 'User',
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: generateImages(`user${Math.floor(Math.random() * 1000)}@email.com`),
      time: new Date().toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      image: withImage ? getRandomImages() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
      content: text
    }
    setTweets((prevTweets) => [newTweet, ...prevTweets])
    // setTweets([...tweets, newTweet]) //testar
  }

  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <header className="sticky top-0 z-50 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">ForYou</h2>
        </header>
        <TwitterForm onTweet={(content) => addNewTweet(content, Math.random() > 0.6)} />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
      <Aside />
    </div>
  )
}

export default App
