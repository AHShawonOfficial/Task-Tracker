import Button from "./Button";

const Header = ({ toggleAddTask, showAddTask }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={!showAddTask ? "green" : "red"}
        text={!showAddTask ? "Add" : "Close"}
        onClick={toggleAddTask}
      />
    </header>
  );
};

export default Header;
