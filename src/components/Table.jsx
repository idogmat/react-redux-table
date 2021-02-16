const Table =(props)=>{

    if(!props.forms[0]){
        return <div>

        </div>
    }
    let tableForms = props.forms.map(f => (<div key={f.id + f.phone}>
        {f.id} {f.firstName} {f.lastName} {f.email} {f.phone}
    </div>));

    return(

        <div>
            {tableForms}
            Table
        </div>
    )
}
export default Table;
