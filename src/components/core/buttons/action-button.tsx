import { Button, Wrapper } from './styles';

export type ActionButtonProps = React.ComponentProps<typeof Button>;

/* --------------------------------------------------------------------------
 * Action Button Component
 * --------------------------------------------------------------------------*/

export const ActionButton = (props: any) => (
  <Wrapper disabled={props.disabled}>
    <Button
      {...props}
      onKeyDown={(ev) =>
        // eslint-disable-next-line react/destructuring-assignment
        props.disabled && ev.preventDefault()
      }
    />
  </Wrapper>
);
