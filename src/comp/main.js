import { useContext, useRef } from "react";
import { ListContext } from "../providers/list-context";


export function ToggleAll(props) {
  const {toggleAll} = useContext(ListContext);
  const toggleAllCheckBoxRef = useRef(null);
  function handleToggleAll() {
    toggleAll(toggleAllCheckBoxRef.current.checked);
  }

  return (
    <section className='main'>
      <input ref={toggleAllCheckBoxRef} className="toggle-all" type="checkbox" onChange={handleToggleAll} />
      {props.children}
    </section>
  )
}




