'use client'
import SearchBar from "./_components/SearchBar";
import CharacterInfo from "./_components/CharacterInfo";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center p-24">
        <SearchBar/>
        <CharacterInfo />
      </main>
    </Provider>
  );
}
