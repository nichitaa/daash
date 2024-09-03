import { BoardItemProps, BoardProps, ItemsPaletteProps } from '@cloudscape-design/board-components';


export const i18nBoardItemStrings: BoardItemProps['i18nStrings'] = {
  dragHandleAriaLabel: 'Drag handle',
  dragHandleAriaDescription:
    'Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard.',
  resizeHandleAriaLabel: 'Resize handle',
  resizeHandleAriaDescription:
    'Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard.',
};

export const i18nBoardStrings: BoardProps['i18nStrings'] = (() => {
  function createAnnouncement(operationAnnouncement, conflicts, disturbed) {
    const conflictsAnnouncement =
      conflicts.length > 0
        ? `Conflicts with ${conflicts.map((c) => c.data.title).join(', ')}.`
        : '';
    const disturbedAnnouncement =
      disturbed.length > 0 ? `Disturbed ${disturbed.length} items.` : '';
    return [operationAnnouncement, conflictsAnnouncement, disturbedAnnouncement]
      .filter(Boolean)
      .join(' ');
  }

  return {
    liveAnnouncementDndStarted: (operationType) =>
      operationType === 'resize' ? 'Resizing' : 'Dragging',
    liveAnnouncementDndItemReordered: (operation) => {
      const columns = `column ${operation.placement.x + 1}`;
      const rows = `row ${operation.placement.y + 1}`;
      return createAnnouncement(
        `Item moved to ${operation.direction === 'horizontal' ? columns : rows}.`,
        operation.conflicts,
        operation.disturbed,
      );
    },
    liveAnnouncementDndItemResized: (operation) => {
      const columnsConstraint = operation.isMinimalColumnsReached ? ' (minimal)' : '';
      const rowsConstraint = operation.isMinimalRowsReached ? ' (minimal)' : '';
      const sizeAnnouncement =
        operation.direction === 'horizontal'
          ? `columns ${operation.placement.width}${columnsConstraint}`
          : `rows ${operation.placement.height}${rowsConstraint}`;
      return createAnnouncement(
        `Item resized to ${sizeAnnouncement}.`,
        operation.conflicts,
        operation.disturbed,
      );
    },
    liveAnnouncementDndItemInserted: (operation) => {
      const columns = `column ${operation.placement.x + 1}`;
      const rows = `row ${operation.placement.y + 1}`;
      return createAnnouncement(
        `Item inserted to ${columns}, ${rows}.`,
        operation.conflicts,
        operation.disturbed,
      );
    },
    liveAnnouncementDndCommitted: (operationType) => `${operationType} committed`,
    liveAnnouncementDndDiscarded: (operationType) => `${operationType} discarded`,
    liveAnnouncementItemRemoved: (op) =>
      createAnnouncement(`Removed item ${op.item.data.title}.`, [], op.disturbed),
    navigationAriaLabel: 'Board navigation',
    navigationAriaDescription: 'Click on non-empty item to move focus over',
    navigationItemAriaLabel: (item) => (item ? item.data.title : 'Empty'),
  };
})();
