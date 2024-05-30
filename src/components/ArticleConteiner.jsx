import React from 'react'
import Article from './article'
import pc from '../assets/images/image-retro-pcs.jpg'
import laptos from '../assets/images/image-top-laptops.jpg'
import game from '../assets/images/image-gaming-growth.jpg'

const ArticleConteiner = () => {
  return (
    <section className='mt-6 md:flex md:flex-wrap md:gap-10'>
        <Article img={pc} number='01' title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades?' />
        <Article img={laptos} number='02' title=' Top 10 Laptops of 2022' text='Our best picks for various needs and budgets.' />
        <Article img={game} number='03' title='The Growth of Gaming' text='  How the pandemic has sparked fresh opportunities.' />
    </section>
  )
}

export default ArticleConteiner
