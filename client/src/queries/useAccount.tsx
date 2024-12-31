import accountApiRequest from "@/apiRequests/account";
import {} from "@/schemaValidations/account.schema";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAccountMe = () => {
    return useQuery({
        queryKey: ["account-profile"],
        queryFn: accountApiRequest.me,
    });
};

export const useUpdateMeMutation = () => {
    return useMutation({
        mutationFn: accountApiRequest.updateMe,
    });
};

export const usePasswordMutation = () => {
    return useMutation({
        mutationFn: accountApiRequest.changePasswordV2,
    });
};
