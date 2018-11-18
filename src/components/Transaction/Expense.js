import React from 'react';

const Expense = () => {
  return (
    <React.Fragment>
      <div className="col-lg-6">
          <div className="card">
              <div className="card-header">
                  <strong>Income Transcation</strong>
              </div>
              <div className="card-body card-block">
                  <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="text-input" className=" form-control-label">Name</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input type="text" id="text-input" name="text-input" placeholder="Name" className="form-control" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-6">
                            <label htmlFor="x_card_code" className="control-label mb-1">Amount</label>
                            <div className="input-group">
                                <div className="input-group-addon">NZD $</div>
                                <input type="text" id="amount" name="amount" className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="x_card_code" className="control-label mb-1">Reference</label>
                            <div className="input-group">
                                <input type="text" id="reference" name="reference" placeholder="Reference" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-6">
                            <label htmlFor="x_card_code" className="control-label mb-1">Date</label>
                            <div className="input-group">
                                <input type="text" id="date" name="date" className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="x_card_code" className="control-label mb-1">Account</label>
                            <div className="input-group">
                                <select name="select" id="select" className="form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-6">
                            <label htmlFor="x_card_code" className="control-label mb-1">Income Category</label>
                            <div className="input-group">
                                <select name="select" id="select" className="form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            &nbsp;
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-12">
                            <label htmlFor="x_card_code" className="control-label mb-1">Note</label>
                            <div className="input-group">
                                <textarea name="textarea-input" id="textarea-input" rows="5" placeholder="Content..." className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-12">
                            <label htmlFor="x_card_code" className="control-label mb-1">Attach Receipt</label>
                            <div className="input-group">
                                <input type="file" id="file-input" name="file-input" className="form-control-file" />
                            </div>
                        </div>
                    </div>
                  </form>
              </div>
              <div className="card-footer">
                  <button type="submit" className="btn btn-primary btn-sm">
                      <i className="fa fa-dot-circle-o"></i> Save Income
                  </button>
              </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Expense;