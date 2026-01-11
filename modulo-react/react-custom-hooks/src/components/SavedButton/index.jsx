import { useOnlineStatus } from "../../components/hooks/useOnlineStatus";

function SaveButton  () {
  const isOnline = useOnlineStatus()

  const handleSaveClick = () => {
    console.log('Save Cliked'); 
  }

  return (
    <>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? "Save Progress" : "Reconneting..."}
      </button>
    </>
  );
};

export default SaveButton