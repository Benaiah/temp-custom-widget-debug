import React from "react";
import CMS from "netlify-cms";

const ObjectControl = CMS.getWidget('object').control;

const BlockButton = props => {
  const className = "flex-auto ma1 pv1 ph2 br2 bn gray bg-near-white hover-gray hover-bg-white"
  const { field, onClick } = props
  return (
    <button
      className={className}
      onClick={() => onClick(field)}>
      { field.get('name') }
    </button>
  )
}

export class BlockSelect extends ObjectControl {
  constructor(props) {
    super(props)
  }

  onClick(widget) {
    this.props.onChange(widget.get('widget'))
  }

  render() {
    const { field, value } = this.props;
    const { collapsed } = this.state;
    const fields = field.get('fields');

    if (this.props.selectedField) {
      // Display the selected widget
    }

    return (
      <div className="flex flex-wrap pa1 bg-moon-gray w-100">
        { value }
        { collapsed ? null : fields.map((f, idx) => {
          return <BlockButton
            field={f}
            key={idx}
            onClick={e => this.onClick(e)}
          />
        }) }
      </div>
    );
  }
}
