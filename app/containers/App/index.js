/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PlayArea from "../../components/PlayArea"
import {
  AppWrapper
} from "./AppStyled"

export default function App() {
  return (
    <AppWrapper>
      <PlayArea />
    </AppWrapper>
  );
}
