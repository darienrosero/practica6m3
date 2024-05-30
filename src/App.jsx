import ArticleConteiner from "./components/ArticleConteiner"
import MainArticle from "./components/MainArticle"
import NewsConteiner from "./components/NewsConteiner"
import Heder from "./components/heder"

function App() {


  return (
    <main className="px-4 pt-6">
      <Heder />
      <div className="lg:flex  lg:gap-8 "> 
        < MainArticle />
        <NewsConteiner />
      </div>
      <ArticleConteiner />
    </main>
  )
}

export default App
