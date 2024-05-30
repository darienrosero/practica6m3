import React from 'react'
import NewArticle from './NewArticle'

const NewsConteiner = () => {
    return (
        <aside className='bg-Verydarkblue text-Offwhite py-7 px-5 '>
            <h1 className='text-Softorange text-4xl'>New</h1>
            <NewArticle title='Hydrogen VS Electric Cars' text='Will hydrogen-fueled cars ever catch up to EVs?' />

            <NewArticle title='The Downsides of AI Artistry' text='What are the possible adverse effects of on-demand AI image generation?' />

            <NewArticle title='Is VC Funding Drying Up?' text='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />
        </aside>
    )
}

export default NewsConteiner
