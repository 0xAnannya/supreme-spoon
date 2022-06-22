import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import Game from "../../components/Game";


function HomePage() {
  return (
    <PageContainer>
      <>
      <div className="text-center text-white">
        <h1 className="text-3xl mt-3">Supreame Spoon</h1>
          <h2 className="mt-1">Play Stone-Paper-Scissor with your friends!</h2>
          <Game/>
        </div>
     
      </>
    </PageContainer>
  );
}

export default HomePage;
