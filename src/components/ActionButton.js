
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

function ActionButton({ onDelete, onEdit }) {

  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle
          caret
          color="info"
        >
          Actions
        </DropdownToggle>
        <DropdownMenu dark>
          <DropdownItem onClick={onEdit}>
            Edit Recipe
          </DropdownItem>
          <DropdownItem onClick={onDelete}>
            Delete Recipe
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>

  );
}

export default ActionButton;