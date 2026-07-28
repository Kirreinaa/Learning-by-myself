type AgnyaButtonProps = {
    text: string
}

function AgnyaButton (props: AgnyaButtonProps) {
    return (
        <button onClick={() => alert(props.text)}>{props.text}</button>
    )
}

export default AgnyaButton