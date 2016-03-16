import React, { Component, PropTypes } from 'react';
import { reduxForm, addArrayValue } from 'redux-form';
export const fields = ['arr[].name'];

@reduxForm({ form: 'simple', fields }, undefined, { addValue: addArrayValue })
export default class SimpleForm extends Component {
  static propTypes = {
    addValue: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.addValue('simple', 'arr');
  }

  render() {
    const {
      fields: { arr },
      addValue,
      dirty,
    } = this.props;
    return (<form>
        <div>
        </div>
        <div>
          {arr.map((ar, index) => <div key={index}>
            <input type="text" {...ar.name} placeholder={index} />
          </div>)}
        </div>
        <button type="button" onClick={() => addValue('simple', 'arr')}>Add</button>
        <button type="button" onClick={() => arr.removeField()}>Remove</button>
        <br />
        Dirty: {dirty.toString()}
      </form>
    );
  }
}

