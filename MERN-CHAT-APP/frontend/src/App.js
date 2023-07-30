import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import "./App.css";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChatProvider>
          <Route exact path="/" component={Homepage} />
          <Route path="/chats" component={ChatPage} />
        </ChatProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
