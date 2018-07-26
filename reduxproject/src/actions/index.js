export const selectTrainer=(trainer)=>{
	console.log("You have clicked on Trainer ",trainer.first);
	// Axios.get () or Middleware
	return {
		type:'TRAINER_SELECTED',
		payload:trainer
	}
}