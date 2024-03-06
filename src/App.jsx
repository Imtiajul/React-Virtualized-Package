import { loremIpsum } from "lorem-ipsum"
import { AutoSizer, List } from "react-virtualized"
import ListItem from "./components/ListItem"

function App() {
  const rowCount = 5000
  const items = Array(rowCount)
    .fill()
    .map((val, id) => {
      return {
        id,
        name: "Hello React",
        image: `https://via.assets.so/movie.png?id=${id}&q=95&w=100&h=100&fit=fill`,
        // image: "https://placehold.co/100x100?font=Montserrat",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 5,
          sentenceUpperBound: 11,
        }),
      }
    })
console.log(items);
  const rowWidth = 800
  const rowHeight =80
  const listHeight = 800
// console.log(items[44].image)
  const renderRow = ({ index, key, style }) => {
    return (
      <ListItem
        key={key}
        name={items[index].name}
        imageUrl={items[index].image}
        text={items[index].text}
        style={style}
      />
    )
  }
  return (
    <div className="list">
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowCount={rowCount}
            rowHeight={rowHeight}
            rowRenderer={renderRow}
            overscanColumnCount={25}
          />
        )}
      </AutoSizer>
    </div>
  )
}

export default App
