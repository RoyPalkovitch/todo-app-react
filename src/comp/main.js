

export function ToggleAll(props) {

  function handleToggleAll(event) {
    props.toggleAll(event.target.checked);
  }

  return (
    <section className={props.className}>
      <input className="toggle-all" type="checkbox" onChange={handleToggleAll} />
      {props.children}
    </section>
  )
}




