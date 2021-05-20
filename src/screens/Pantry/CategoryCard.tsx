import React from "react";
import { observer } from "mobx-react-lite";
import { Trans } from "@lingui/react";
import { Card } from "src/components/Card";
import { usePantryStore } from "./store/usePantryStore";
import { PantryCardType } from "./store/model";

export const CategoryCard = observer(
  ({ data, loading, error, isActive }: PantryCardType) => {
    const {
      handleSetActiveCard,
      handleResetActiveCards,
      handleDeleteFoodType,
      handleFoodTypeSubmit,
      handleFoodTypeUpdate,
    } = usePantryStore();

    return (
      <Card
        data={
          data?.value
            ? {
                value: data.value,
                img_url: data.img_url as string,
                description: data?.decription,
              }
            : undefined
        }
        loading={loading}
        error={error}
        isActive={isActive}
        onSubmit={handleFoodTypeSubmit}
        onCancel={handleResetActiveCards}
        actions={[
          {
            children: <Trans>Edit</Trans>,
            onClick: () => handleSetActiveCard(data!.value),
          },
          {
            children: <Trans>Delete</Trans>,
            onClick: handleDeleteFoodType(data!.value),
            disabled: (data?.food_aggregate?.aggregate?.count || 0) > 0,
          },
        ]}
        fields={[
          {
            required: true,
            error: error && !data?.value,
            variant: "outlined",
            label: <Trans>Category title</Trans>,
            defaultValue: data?.value,
            onChange: handleFoodTypeUpdate("value"),
          },
          {
            required: true,
            error: error && !data?.decription,
            variant: "outlined",
            label: <Trans>Description</Trans>,
            defaultValue: data?.decription,
            onChange: handleFoodTypeUpdate("decription"),
          },
          {
            variant: "outlined",
            label: <Trans>Image URL</Trans>,
            defaultValue: data?.img_url,
            onChange: handleFoodTypeUpdate("img_url"),
          },
        ]}
      />
    );
  }
);
