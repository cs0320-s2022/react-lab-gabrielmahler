function TextBox(props: {change: (str: string) => void; label: string}) {    
    return (
    <div>
        Enter {props.label}: {" "}
        <input 
            type='text'
            onChange={(event) => props.change(event.target.value)}
        />
    </div>
    );
}
export default TextBox;