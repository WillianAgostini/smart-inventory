export default {
	data_tableprimaryColumnscustomColumn1onClick () {
		storeValue("selectedRow_id", data_table.selectedRow._id, true);
		storeValue("selectedRowname", data_table.selectedRow.name, true);
		storeValue("selectedRowquantity", data_table.selectedRow.quantity, true);
	}
}