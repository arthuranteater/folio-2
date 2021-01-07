import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layoutGrid"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"
import Intro from "../components/intro"
import { Helmet } from "react-helmet"
import Projects from "../components/projects"

const IndexPage = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
    </Helmet>
    <Layout>
      <SEO title="Home" />
      <Intro />
      <Projects />
      <About />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        quam eleifend ipsum dignissim euismod. Sed imperdiet massa purus, ac
        rutrum tortor tincidunt vel. Vestibulum sed eros varius, faucibus velit
        a, ultrices urna. Nunc et urna a augue posuere volutpat. Aenean
        venenatis finibus purus, ut suscipit lorem semper nec. Morbi massa nisi,
        rutrum et auctor sed, pharetra ut mi. Sed nec aliquam leo. Proin
        ultricies tempor urna, ac rutrum nulla auctor vel. Mauris lacinia quam
        vitae risus vulputate efficitur. Phasellus purus libero, aliquet sit
        amet dapibus sit amet, condimentum consequat sapien. Suspendisse finibus
        elit ut ullamcorper pulvinar. Sed ultricies pellentesque velit eget
        tempus. Morbi lacinia dui vel consequat tincidunt. Nulla accumsan magna
        a euismod luctus. Nullam in tellus mattis, vulputate eros eget,
        malesuada tellus. Pellentesque sed semper urna. Phasellus ac malesuada
        nulla. Pellentesque pharetra diam vitae nibh malesuada, quis ornare enim
        lobortis. Ut fermentum mollis laoreet. Nam efficitur imperdiet diam quis
        tristique. In iaculis diam nec fermentum sagittis. Praesent auctor ipsum
        quis sollicitudin lacinia. Vivamus cursus vel dui auctor blandit. Nulla
        gravida metus interdum tellus ultrices, viverra fermentum diam gravida.
        Nulla nec ante lorem. Integer placerat mauris et tellus dapibus
        volutpat. Aenean odio nisl, aliquet a magna non, pharetra molestie
        turpis. Aenean elementum non risus sit amet cursus. Aliquam a sem nec
        justo fermentum fringilla vulputate et urna. Donec id mollis nisi, non
        finibus massa. Nam commodo a quam sit amet scelerisque. Nam finibus,
        justo ac dictum placerat, sapien neque egestas sem, vel imperdiet nunc
        ligula at ex. Sed vel tellus risus. Suspendisse potenti. Aliquam
        tristique neque ac odio convallis, at aliquet enim aliquam. Duis
        tristique interdum enim ut bibendum. Sed et mauris ac augue maximus
        gravida consectetur vel lectus. Donec congue elit enim, blandit rhoncus
        odio semper eu. In fermentum turpis ac risus suscipit dapibus. Cras eu
        metus sed justo tempor tincidunt et vel libero. Sed consequat eu sapien
        pharetra viverra. Duis eget tellus id diam porttitor pretium eget at
        felis. Maecenas venenatis ornare feugiat. Nam sollicitudin ante et nulla
        commodo hendrerit. Curabitur at enim eu nunc bibendum interdum in a
        enim. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec finibus purus in dui cursus, eu
        ullamcorper erat porta. Donec a massa erat. Ut tortor quam, luctus nec
        est id, feugiat hendrerit tortor. Aenean porta nunc ac rhoncus sagittis.
        In sit amet leo imperdiet, commodo enim interdum, fermentum sapien.
        Nulla malesuada, metus et molestie cursus, lectus quam viverra augue,
        sed hendrerit enim lorem non diam. Aenean a sem ac nibh varius convallis
        eu nec ipsum. Aenean at porta lorem. Vivamus purus metus, pulvinar a
        fermentum quis, maximus mollis metus. In velit neque, tempor nec leo ac,
        accumsan aliquet ipsum. Cras sem ligula, eleifend id nisi in, lobortis
        luctus neque. Curabitur fermentum vitae tortor eget fringilla. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Phasellus a condimentum nisi, eget convallis lacus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Quisque vestibulum commodo enim, quis venenatis tellus
        tempor et. Maecenas elementum turpis dui, et euismod purus aliquet non.
        Aenean sodales euismod magna id dictum. Proin aliquam eros ac imperdiet
        gravida. Proin lacinia ante vel nulla eleifend gravida. Nunc eu nisl
        aliquet, hendrerit ante nec, pulvinar nisi. Fusce auctor orci vel leo
        dictum, id varius massa laoreet. Integer efficitur mollis placerat.
        Quisque venenatis, neque pharetra tempor feugiat, nulla lacus fringilla
        metus, a commodo libero erat eget lacus. Suspendisse sit amet efficitur
        neque. Nulla quis blandit ante, ac lobortis nisl. Praesent sagittis ex
        lectus, nec laoreet ipsum dignissim non. Proin egestas nunc ipsum, sed
        viverra nisl tincidunt at. Nulla commodo id metus sed scelerisque. Donec
        et nisl libero. Nulla euismod condimentum nisl. Suspendisse laoreet a
        nisl vitae ultricies. Phasellus nibh libero, eleifend in lacinia vel,
        feugiat sit amet nisl. Fusce id maximus velit, egestas cursus neque.
        Aenean ut ante nunc. Cras nec nulla tortor. Duis erat neque, bibendum
        quis vehicula eu, pretium imperdiet ipsum. Nulla vel dui placerat,
        suscipit eros at, euismod elit. Quisque mattis semper blandit.
        Vestibulum ut sodales mauris, ac aliquam est. Ut ligula justo, tempus
        vitae tempus nec, vestibulum vel ligula. Vestibulum nec rhoncus tortor,
        ut efficitur ante. Aenean quis leo aliquet, suscipit ex ut, tincidunt
        ligula. Donec ut ex vitae justo porta consequat. Nam vel venenatis leo,
        quis maximus metus. Nam ultricies auctor nulla, ut hendrerit nunc
        faucibus vel. Phasellus vel lorem ornare, pulvinar orci eu, pharetra
        nunc. Donec aliquet purus vel enim lacinia ullamcorper. Integer nec
        pretium turpis. Vestibulum rhoncus ex interdum lacus dignissim, nec
        sagittis est consequat. Morbi vel mauris non est tempus tincidunt ut
        vitae est. Sed facilisis ligula eget turpis aliquet pretium. Sed
        consequat odio in nunc vehicula sagittis vitae at dui. Nulla elementum
        erat nec vehicula suscipit. Donec quis lacus vitae ante bibendum
        hendrerit. Nam laoreet, lorem eu aliquet viverra, neque sapien posuere
        augue, fringilla mollis elit risus ac magna. Vivamus gravida bibendum
        tellus in sodales. Pellentesque vel augue quis velit efficitur posuere.
        Quisque purus dolor, hendrerit eget libero at, fringilla gravida elit.
        Nulla eget fringilla felis. Sed vitae fermentum erat, ut laoreet purus.
        Ut ac efficitur lacus, sed tempor tellus. Aliquam tristique ex ut sem
        sodales vestibulum. Aliquam et turpis est. Proin nec ullamcorper ligula.
        Proin pretium vehicula commodo. Aenean in ipsum vehicula, imperdiet
        justo non, ultrices dui. Aliquam a cursus lorem. Vestibulum porttitor
        feugiat suscipit. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Morbi et vehicula massa.
        Nulla pellentesque urna a metus volutpat, at sodales elit hendrerit.
        Mauris maximus tempus justo, at imperdiet augue. Suspendisse convallis
        porttitor mi ut auctor. In varius lorem eu justo fringilla porta. Ut
        gravida elit sit amet tempor commodo. Nulla facilisi. Duis malesuada
        massa sed augue vehicula dictum.
      </p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  </>
)

export default IndexPage
