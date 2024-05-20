import React from "react";
// import ModelListItem from "./ModelListItem";
// import ModelListViewOptions from "./ModelListViewOptions";
import ModelListCardItem from "Templates/_shared/ModelList/ModelListCardItem";
import Loading from "Templates/_shared/Loading/Loading";
import Empty from "Templates/_shared/Empty/Empty";
import { compose, withState, lifecycle } from "recompose";
import { Paper, Grid, Grow, Fade } from "@material-ui/core";
const enhance = compose(
  withState("open", "setOpen", false),
  withState("deletedModel", "setDeletedModel", {}),
  withState("In", "setIn", false),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.props.setIn(true);
      }, 200);
    }
  })
);
const ModelListItems = enhance(
  ({
    models,
    gridSizes,
    columnNumber,
    classes,
    ModelListItemComponent,
    open,
    setOpen,
    deleteModel,
    updateModel,
    deletedModel,
    setDeletedModel,
    onEdit,
    onView,
    match,
    history,
    page,
    loading,
    In,
    setIn,
    ...rest
  }) => {
    if (models) {
      if (Array.isArray(models) && models.length > 0) {
        return models.map((model, index) => {
          return (
            <Fade in={In} timeout={index * 200}>
              <Grid
                style={{ marginRight: "2em" }}
                key={index}
                xs={gridSizes ? gridSizes.xs : 12}
                sm={gridSizes ? gridSizes.sm : 12}
                md={gridSizes ? gridSizes.md : 12}
                lg={gridSizes ? gridSizes.lg : 12}
                xl={gridSizes ? gridSizes.xl : 12}
                item
              >
                <div className={classes.listContainer}>
                  {ModelListItemComponent ? (
                    <ModelListItemComponent
                      classes={classes}
                      match={match}
                      open={open}
                      setOpen={setOpen}
                      model={model}
                      updateModel={updateModel}
                      deleteModel={deleteModel}
                      setDeletedModel={setDeletedModel}
                      deletedModel={deletedModel}
                      history={history}
                      columnNumber={columnNumber}
                      onEdit={onEdit}
                      onView={onView}
                      page={page}
                      {...rest}
                    />
                  ) : (
                    <ModelListCardItem
                      classes={classes}
                      match={match}
                      open={open}
                      setOpen={setOpen}
                      model={model}
                      updateModel={updateModel}
                      deleteModel={deleteModel}
                      setDeletedModel={setDeletedModel}
                      deletedModel={deletedModel}
                      history={history}
                      columnNumber={columnNumber}
                      onEdit={onEdit}
                      onView={onView}
                      page={page}
                      {...rest}
                    />
                  )}
                </div>
              </Grid>
            </Fade>
          );
        });
      }
    }
    if (loading) {
      return <Loading />;
    }
    return <Empty />;
  }
);

export default ModelListItems;
