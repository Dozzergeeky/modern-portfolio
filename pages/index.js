import { styled } from '../stitches.config'
import Head from 'next/head'
import Base from '../layouts/Base'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { getPersonJsonLd } from '../lib/json-ld'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  return {
    props: {
      title: 'Dozzer Geeky',
      description: 'Obsessed with technology, programming, and being a Geek!',
      image: '/static/images/home-bw.jpg',
      primaryColor: 'cyan',
      secondaryColor: 'green',
    },
  }
}

function Index(props) {
  const { title, description, image } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://dozzer.tech" property="og:url" />
        <meta content={`https://dozzer.tech${image}`} property="og:image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()),
          }}
          key="person-jsonld"
        />
      </Head>

      <div>
        <h1>{title}</h1>
        <p>
          <strong>
            CSE Graduate and Ex-MERN Mentor at{' '}
            <a
              href="https://www.linkedin.com/company/codefeast"
              target="blank"
            >
              Codefeast
            </a>
          </strong>
          <br />
          {description}
        </p>
        <ShortcutHome />
      </div>
    </>
  )
}

Index.Layout = Base

export default Index
