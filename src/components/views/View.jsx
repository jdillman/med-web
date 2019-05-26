import React from 'react';
import styled from 'styled-components';

const StyledView = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "side";

  min-height: 100%;

  grid-template-rows: 100px 75px;

  height: 100vh;

  .grid-item {
    border: 1px solid gray;
  }

  .grid-header {
    grid-area: header;
  }

  .grid-main {
    grid-area: content;
  }

  .grid-nav {
    grid-area: nav;
  }

  .grid-side {
    grid-area: side;
  }

  .grid-footer {
    grid-area: footer;
  }
`;

export default function View({ children }) {
  return (
    <StyledView className="grid-wrapper">
      <section className="grid-item grid-header">
        <p>menu</p>
        <p>status</p>
        <p>settings</p>
      </section>
      <section className="grid-item grid-nav">
        nav
      </section>
      <section className="grid-item grid-main">
        {children}
      </section>
      <section className="grid-item grid-side">Optional Sidebar</section>
    </StyledView>
  );
}
