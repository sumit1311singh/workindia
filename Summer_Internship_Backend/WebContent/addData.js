function add_in_db() {
    /*let add_btn = document.getElementsByClass("add_input");
    add_btn.disabled = true;
    const cust_name = inputs[0].value;
    const cust_no = inputs[1].value;
    const invoice_no = inputs[2].value;
    const total_open_amt = inputs[3].value;
    const due_date = inputs[4].value;*/
    const tit = document.getElementById("add_title").value;
    /*if(tit==null)
    	tit="new";*/
	//const tit="new";
    const de = document.getElementById("add_des").value;
    const ca = document.getElementById("add_cate").value;
    const dd = document.getElementById("halwa").value;
    //console.log(name_customer, cust_number);
    fetch(`http://http://localhost:8080/Summer_Internship_Backend/add.do?title=${tit}&description=${de}&category=${ca}&duedate=${dd}`, {
            method: 'POST'
        }).then(resposne => resposne.json())
        .then(data => {
            console.log(data.message);
            fetchRecords();

        })
        .then(() => {

            add_btn.disabled = false;
            //showSnackbar("Successfully Added ", "add-modal-snack-bar", "add-snack-message");

        })
        .catch((error) => {
            add_btn.disabled = false;
            console.error('Error:', error);
            //showSnackbar("Error occured", "add-modal-snack-bar", "add-snack-message");
        })
}