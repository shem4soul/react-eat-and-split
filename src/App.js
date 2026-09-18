const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <h1>Welcome to the Bill Splitter</h1>
      <p>
        Here you can split bills with your friends and keep track of who owes
        what.
      </p>
      <p>
        Click on a friend to see the details of your transactions with them.
      </p>
    </div>
  );
}
