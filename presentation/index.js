// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    build: require("../images/build.jpg"),
    bundler: require("../images/bundler.png"),
    comments: require("../images/comments.jpg"),
    do: require("../images/do.jpg"),
    maintain: require("../images/maintain.jpg"),
    pay: require("../images/pay.jpg"),
    moduleCounts: require("../images/module-counts.png"),
    name: require("../images/name.jpg"),
    dependency: require("../images/dependency.jpg"),
    lock: require("../images/lock.jpg"),
    range: require("../images/range.jpg"),
    recognition: require("../images/recognition.jpg"),
    reuse: require("../images/reuse.jpg"),
    survivejs: require("../images/survivejs.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quarternary: "rgba(255, 219, 169, 0.43)",
});
theme.screen.components.codePane.fontSize = "60%";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            The Whys, Hows, and Whats of npm Packaging
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>The Growth of npm</Heading>
          <Image src={images.moduleCounts} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Why Packages?
          </Heading>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.reuse}
          bgDarken={0.45}
        >
          <Heading size={1} textColor="primary">
            Reuse
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/recycle-reuse-recycling-recyclable-57136/"
              textColor="rgba(255,255,255,0.5)"
            >
              9355
            </Link>
          </Text>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.recognition}
          bgDarken={0.45}
        >
          <Heading size={1} textColor="primary">
            Recognition
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/board-positive-well-done-2470559/"
              textColor="rgba(255,255,255,0.5)"
            >
              geralt
            </Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            What's in a Distributed Package?
          </Heading>
          <List>
            <Appear>
              <ListItem>Source code</ListItem>
            </Appear>
            <Appear>
              <ListItem>License</ListItem>
            </Appear>
            <Appear>
              <ListItem>README</ListItem>
            </Appear>
            <Appear>
              <ListItem>Change log</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Metadata - <b>package.json</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Control through <b>package.json</b> <code>files</code> property
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} fit textColor="tertiary">
            package.json
          </Heading>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.comments}
          bgDarken={0.45}
        >
          <Heading size={1} textColor="primary">
            No comments
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/cms-wordpress-265128/"
              textColor="rgba(255,255,255,0.5)"
            >
              pixelcreatures
            </Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>scripts</Heading>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/scripts.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <i>bin</i>, <i>main</i>, <i>module</i> - Entries
          </Heading>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/entries.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <i>dependencies</i>, <i>devDependencies</i>, <i>dependencies</i>,{" "}
            <i>peerDependencies</i>, ...
          </Heading>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/dependencies.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Links - <i>repository</i>, <i>homepage</i>, <i>bugs</i>
          </Heading>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/links.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            Even more properties like <i>keywords</i>, sometimes tooling
            metadata
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} fit textColor="tertiary">
            What if We Have a Technical Problem to Solve?
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>To Consume or to Develop?</Heading>
          <List>
            <Appear>
              <ListItem>Use an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Enhance an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Take over an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Fork an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Develop your own package</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.do} bgDarken={0.45}>
          <Heading size={1} fit textColor="primary">
            Who does the work?
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/not-hear-not-see-do-not-speak-funny-1760750/"
              textColor="rgba(255,255,255,0.5)"
            >
              Alexas_Fotos
            </Link>
          </Text>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.maintain}
          bgDarken={0.45}
        >
          <Heading size={1} fit textColor="primary">
            Who maintains the work?
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/cleanliness-maid-maintains-cleaning-2799459/"
              textColor="rgba(255,255,255,0.5)"
            >
              pascalhelmer
            </Link>
          </Text>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.pay}
          bgDarken={0.45}
        >
          <Heading size={1} fit textColor="primary">
            Who pays for the work?
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/money-card-business-credit-card-256319/"
              textColor="rgba(255,255,255,0.5)"
            >
              jarmoluk
            </Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            How to Package?
          </Heading>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.name}
          bgDarken={0.45}
        >
          <Heading size={1} fit textColor="primary">
            1. Find a suitable name
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/place-name-sign-thing-experience-1647341/"
              textColor="rgba(255,255,255,0.5)"
            >
              geralt
            </Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>2. Understand SemVer</Heading>
          <List>
            <Appear>
              <ListItem>SemVer === {`<major>.<minor>.<patch>`}</ListItem>
            </Appear>
            <Appear>
              <ListItem>ComVer === {`<not compatible>.<compatible>`}</ListItem>
            </Appear>
            <Appear>
              <ListItem>EmoVer === {`<emotional>.<major>.<minor>`}</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            3. Communicate Where the Code Should Work
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Simple answer for Node - the <i>engines</i> property
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>This doesn't work with the browsers, though!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If you use JavaScript, then the client can use{" "}
                <Link href="https://www.npmjs.com/package/babel-preset-env">
                  babel-preset-env
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/browserslist">
                  browserslist
                </Link>{" "}
                to compile to the needed targets
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.build}
          bgDarken={0.45}
        >
          <Heading size={1} caps fit textColor="primary">
            4. Build the Package
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/motorbike-garage-repairs-hobby-407186/"
              textColor="rgba(255,255,255,0.5)"
            >
              SplitShire
            </Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            What if we want to use custom language features?
          </Heading>
          <Appear>
            <Text margin="40px auto">Use Babel.</Text>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            What if we want a standalone bundle (think CDNs)?
          </Heading>
          <Appear>
            <Text margin="40px auto">Use Babel and bundlers.</Text>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>How Bundlers Work</Heading>
          <Image src={images.bundler} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            What if we want to use some other language?
          </Heading>
          <Appear>
            <Text margin="40px auto">Compile to JavaScript anyway.</Text>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            How to support tree shaking of modern bundlers?
          </Heading>
          <Appear>
            <Text margin="40px auto">
              Compile in a specific way and set the <code>module</code>{" "}
              property.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            What if I want to distribute my component styling?
          </Heading>
          <Appear>
            <Text margin="40px auto">Good luck.</Text>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>5. Publish the Package</Heading>
          <List>
            <Appear>
              <ListItem>
                <code>
                  npm version{" "}
                  {`<x.y.z|(pre)major|(pre)minor|(pre)patch|prerelease>`}
                </code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Publish pre-release versions to gather feedback
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>6. Adjust a Package</Heading>
          <List>
            <Appear>
              <ListItem>
                Deprecate - <code>npm deprecate</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Unpublish - Possible only first 24h (hello <b>leftpad</b>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Rename - See <code>npm deprecate</code> again
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Share authorship - Consider namespaces and teams for larger
                projects
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            How to Consume Packages?
          </Heading>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.range}
          bgDarken={0.45}
        >
          <Heading size={1} fit textColor="primary">
            Consider version ranges (^, ~, *, {`>=`}, {`<`}, ...)
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/mountains-landscape-mist-smoke-889131/"
              textColor="rgba(255,255,255,0.5)"
            >
              skeeze
            </Link>
          </Text>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.lock}
          bgDarken={0.45}
        >
          <Heading size={1} fit textColor="primary">
            Use lockfiles (package-lock.json, yarn.lock)
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/door-blue-rusty-entrance-1587863/"
              textColor="rgba(255,255,255,0.5)"
            >
              haalkab
            </Link>
          </Text>
        </Slide>

        <Slide
          transition={slideTransition}
          bgImage={images.dependency}
          bgDarken={0.45}
        >
          <Heading size={1} caps fit textColor="primary">
            Use dependency management tooling to update to newer versions
          </Heading>
          <Text>
            <Link
              href="https://pixabay.com/en/coffee-cafe-beverage-cup-2319112/"
              textColor="rgba(255,255,255,0.5)"
            >
              Engin_Akyurt
            </Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/webpack/">
            <Heading size={1}>SurviveJS - Maintenance</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="324px" />
          <Link href="https://twitter.com/bebraw">
            <Heading size={2} textColor="secondary" fit>
              by Juho Vepsäläinen and Artem Sapegin
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
